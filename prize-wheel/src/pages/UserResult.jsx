import { useEffect, useState, useContext } from 'react';
import { currentUserContext } from '../App'

const UserResult = () => {
  const { currentUser } = useContext(currentUserContext);
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    const storedGameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
    const currUserGameHistory = storedGameHistory.filter(
      (element) => {
        return element.user.name === currentUser.name
          && element.user.email === currentUser.email
          && element.user.password === currentUser.password;
      }
    );
    setGameHistory(currUserGameHistory);
  }, []);

  return (
    <>
      <div>
        <h1>Welcome, {currentUser ? currentUser.name : 'Guest'}!</h1>
        <div>
          <h3>Your Game History:</h3>
          <ul>
            {gameHistory.map((game, index) => (
              <li key={index}>
                <strong>Game {index + 1}:</strong>
                <p>Entry: {game.entry}</p>
                <p>Win Number: {game.winNum}</p>
                <p>Result: {game.isWin ? 'You Win!' : 'You Lose.'}</p>
                {/* Add more details as needed */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserResult;