import { FormEvent, useState } from "react";
import useTelegram from "../../hooks/useTelegram";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import products from "../../stores/products";
import useAuth from "../../hooks/useAuth";
import NoAuth from "../../components/Auth/NoAuth";
import { uploadProductImage } from "../../api/products";



const AddProduct = () => {
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
    const [price, setPrice] = useState<number>()
    const [img, setImg] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { isAuthenticated, loading: loadingAuth } = useAuth()

    const { tgID } = useTelegram()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const send = async() => {
        if(!name || !info || !price) return setError('Введите коректные данные')
        products.createProduct({
            name, 
            info,
            price,
            img
        }, tgID, setLoading)
        .finally(() => {
            navigate('/')
        })

        
    }

    const uploadFile = (file: File) => {
        uploadProductImage(file)
        .then(res => {
            if(res?.status === 201) {
                setImg(res.data.fileName)
            }else {
                setError('Ошибка загрузки файла')
            }
        })
    }

    if(loading === true) return <Loading />

    if(isAuthenticated === false && loadingAuth === false) return <NoAuth />
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{ backgroundColor: '#1d1d1d', borderRadius: '10px', padding: '2em' }}>
                        <h2 className="text-center" style={{ color: '#fff' }}>Создать товар</h2>
                        {error && (
                            <p style={{
                                color: 'red'
                            }}>{error}</p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Название товара</label>
                                <input
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label" style={{ color: '#888' }}>Описание</label>
                                <input
                                    onChange={e => setInfo(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ color: '#888' }}>Цена</label>
                                <input
                                    onChange={e => setPrice(Number(e.target.value))}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Фото</label>
                                <input type="file" name="" id="" className="form-control" onChange={e => {e.target.files && uploadFile(e.target.files[0])}}/>
                            </div>
                            <button onClick={() => send()} type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#646cff', border: 'none', marginTop: '10px' }}>
                                Добавить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct