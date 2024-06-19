import React from "react";
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from "./../Main/Main";
import Games from "../Games/Games";
import CreateGame from "../CreateGame/CreateGame";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Recovering from "../Recovering/Recovering";
import { authApi } from "../../utils/authApi";
import { mainApi } from "../../utils/mainApi";
import Profile from "../Profile/Profile";
import GameMap from "../GameMap/GameMap";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [isLoginOpened, setIsLoginOpened] = React.useState(false)
    const [isRegisterOpened, setIsRegisterOpened] = React.useState(false)
    const [isRecoveringOpened, setIsRecoveringOpened] = React.useState(false)
    const [isCheckpointOpened, setIsCheckpointOpened] = React.useState(false)
    const [isAnswerOpened, setIsAnswerOpened] = React.useState(false)
    const [isEndOpened, setIsEndOpened] = React.useState(false)
    const [currentUser, setCurrentUser] = React.useState({})
    const [games, setGames] = React.useState([])

    const [game, setGame] = React.useState({})
    const [checkpointAmount, setCheckpointAmount] = React.useState(0)
    const [checkpointNumber, setCheckpointNumber] = React.useState(0)
    const [taskText, setTaskText] = React.useState('')
    const [taskAnswer, setTaskAnswer] = React.useState(0)
    const [progress, setProgress] = React.useState({})

    const navigate = useNavigate()
    const pathname = window.location.pathname
    const hash = window.location.hash

    React.useEffect(() => {
        if (localStorage.jwt) {
            Promise.all([
                mainApi.getUserInfo(localStorage.jwt),
                mainApi.getGames(localStorage.jwt)
            ])
            .then(([userRes, gameRes]) => {
                setIsLoggedIn(true)
                setCurrentUser({
                    firstname: userRes.name,
                    lastname: userRes.surname,
                    login: userRes.login,
                    email: userRes.email
                })
                setGames(gameRes)
            })
            .catch(err => console.log(err))
        } else {
            localStorage.clear()
            setIsLoggedIn(false)
        }
    }, [isLoggedIn, navigate])

    React.useEffect(() => {
        if (pathname === "/map") {
            setGame(games[Number(hash.split('#')[1])-3])
            setCheckpointAmount(games[Number(hash.split('#')[1])-3].count_checkpoint)
            mainApi.getProgress(hash.split('#')[1], localStorage.jwt)
            .then(res => setProgress(res.progress))
        }
    }, [navigate])

    function handleLoginClick() {
        setIsLoginOpened(true)
        setIsRegisterOpened(false)
    }

    function handleRegisterClick() {
        setIsRegisterOpened(true)
        setIsLoginOpened(false)
    }

    function handleRecoveringClick() {
        setIsRecoveringOpened(true)
        setIsLoginOpened(false)
    }

    function handleCheckpointClick() {
        setIsCheckpointOpened(true)
    }

    function handleAnswerClick(num) {
        setCheckpointNumber(num)
        mainApi.getProgress(game.id, localStorage.jwt)
        .then(res => setProgress(res.progress))
        mainApi.getTask(game.class_user, game.checkpoint[num-1].topic, localStorage.jwt)
        .then(res => {
            setTaskText(res.task)
            setTaskAnswer(res.response_task)
            setIsAnswerOpened(true)
        })
    }

    function closeAllPopups() {
        setIsLoginOpened(false)
        setIsRegisterOpened(false)
        setIsRecoveringOpened(false)
        setIsCheckpointOpened(false)
        setIsAnswerOpened(false)
    }

    function handleUnloggedClick() {
        if (!localStorage.jwt) {
            navigate("/", {replace: true})
            setIsLoginOpened(true)
        }
    }

    function handleRegister(formValue) {
        authApi.register(formValue)
        .then(res => {
            if (res) {
                handleLogin(formValue)
            }
        })
        .catch(err => console.log(err))
    }

    function handleLogin(formValue) {
        authApi.login(formValue)
        .then(res => {
            if (res) {
                setCurrentUser({
                    token: res.auth_token,
                })
                authApi.setFIO(formValue, localStorage.jwt)
                setIsLoggedIn(true)
                closeAllPopups()
            }
        })
        .catch(err => console.log(err))
    }

    function handleSignOutClick() {
        authApi.signOut(localStorage.jwt)
        .then(res => {
            if (res) {
                setIsLoggedIn(false)
                localStorage.clear()
                navigate("/", {replace: true})
            }
        })
    }

    function handleCreateGame(formValue) {
        mainApi.createGame(formValue, localStorage.jwt)
        .then(res => {
            setGames([res, ...games])
            closeAllPopups()
            navigate("/")
        })
    }

    function handleAnswerSubmit(taskNumber) {
        mainApi.saveProgress(String(game.id), String(game.checkpoint[checkpointNumber-1].id), checkpointNumber, String(taskNumber), localStorage.jwt)
    }

    function handleEndGame() {
        setIsEndOpened(true)
    }
    console.log(game)

    return(
        <div className="app">
            <CurrentUserContext.Provider value={currentUser}>
                <Routes>
                    <Route path="/" element={<Main onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} onUnloggedClick={handleUnloggedClick}
                    onSignOutClick={handleSignOutClick} isLoggedIn={isLoggedIn} />} />
                    <Route path="/games" element={<ProtectedRoute element={Games} onUnloggedClick={handleUnloggedClick} isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} 
                    onSignOutClick={handleSignOutClick} games={games} />} />
                    <Route path="/create-game" element={<ProtectedRoute element={CreateGame} onUnloggedClick={handleUnloggedClick} isLoggedIn={isLoggedIn} onClose={closeAllPopups} onSubmit={handleCreateGame} 
                    onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} onSignOutClick={handleSignOutClick} isOpened={isCheckpointOpened} onCheckpointClick={handleCheckpointClick} />} />
                    <Route path="/profile" element={<ProtectedRoute element={Profile} onUnloggedClick={handleUnloggedClick} currentUser={currentUser} onSignOutClick={handleSignOutClick} isLoggedIn={isLoggedIn} />} />
                    <Route path="/map" element={<GameMap isEndOpened={isEndOpened} onEndGame={handleEndGame} isLoggedIn={isLoggedIn} onUnloggedClick={handleUnloggedClick} 
                    progress={progress} taskText={taskText} taskAnswer={taskAnswer} isOpened={isAnswerOpened} game={game} onSubmit={handleAnswerSubmit}
                    onClose={closeAllPopups} onClick={handleAnswerClick} checkpointAmount={checkpointAmount} onSignOutClick={handleSignOutClick} checkpointNumber={checkpointNumber} />} />
                </Routes>    
                <Login isOpened={isLoginOpened} onRegisterClick={handleRegisterClick} onRecoveringClick={handleRecoveringClick} onClose={closeAllPopups} onSubmit={handleLogin} />
                <Register isOpened={isRegisterOpened} onLoginClick={handleLoginClick} onClose={closeAllPopups} onSubmit={handleRegister} />
                <Recovering isOpened={isRecoveringOpened} onClose={closeAllPopups} />
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App;