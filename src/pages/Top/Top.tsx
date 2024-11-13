import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import users from "../../stores/users";
import './Top.css';
import Loading from "../../components/Loading/Loading";
import UserTopCard from "../../components/Top/UserTopCard";

const Top: FC = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  // Эффект для загрузки пользователей при изменении страницы
  useEffect(() => {
    const fetchData = async () => {
      console.log(`Загрузка страницы: ${currentPage}`);
      await users.fetchTopUsers(currentPage);
      console.log("Пользователи загружены:", users.users);
    };

    if (!users.endFetch) fetchData();
  }, [currentPage]);

  // Эффект для обработки скролла
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 5 // небольшая погрешность
      ) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Показываем индикатор загрузки только на первой загрузке
  if (users.isLoading && currentPage === 1) return <Loading />;

  return (
    <>
      <div className="users">
        {users.users.map((user) => (
          <UserTopCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
});

export default Top;