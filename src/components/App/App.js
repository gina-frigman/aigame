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

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [isLoginOpened, setIsLoginOpened] = React.useState(false)
    const [isRegisterOpened, setIsRegisterOpened] = React.useState(false)
    const [isRecoveringOpened, setIsRecoveringOpened] = React.useState(false)
    const [isCheckpointOpened, setIsCheckpointOpened] = React.useState(false)
    const [isAnswerOpened, setIsAnswerOpened] = React.useState(false)
    const [checkpointAmount, setCheckpointAmount] = React.useState(0)
    const [checkpointNumber, setCheckpointNumber] = React.useState(0)
    const [currentUser, setCurrentUser] = React.useState({})
    const [games, setGames] = React.useState([])
    const navigate = useNavigate()
    const pathname = window.location.pathname
    const hash = window.location.hash

    React.useEffect(() => {
        if (currentUser.token) {
            Promise.all([
                mainApi.getUserInfo(currentUser.token),
                mainApi.getGames(currentUser.token)
            ])
            .then(([userRes, gameRes]) => {
                setCurrentUser(userRes)
                setGames(gameRes)
                setIsLoggedIn(true)
            })
        }
    })

    React.useEffect(() => {
        if (pathname === "/map") {
            mainApi.getProgress(hash.split('#')[1], currentUser.token)
        }
    })

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

    function handleAnswerClick(id) {
        setCheckpointNumber(id)
        setIsAnswerOpened(true)
    }

    function closeAllPopups() {
        setIsLoginOpened(false)
        setIsRegisterOpened(false)
        setIsRecoveringOpened(false)
        setIsCheckpointOpened(false)
        setIsAnswerOpened(false)
    }

    function handleRegister(formValue) {
        authApi.register(formValue)
        .then(res => {
            if (res) {
                setIsLoggedIn(true)
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
                    ...currentUser,
                    token: res.token
                })
                setIsLoggedIn(true)
                navigate("/games", {replace: true})
                closeAllPopups()
            }
        })
        .catch(err => console.log(err))
    }

    function handleSignOutClick() {
        authApi.signOut(currentUser.token)
        .then(res => {
            if (res) {
                setIsLoggedIn(false)
                navigate("/", {replace: true})
            }
        })
    }

    function handleCreateGame(formValue) {
        mainApi.createGame(formValue, currentUser.token)
        .then(res => {
            setGames([res, ...games])
        })
    }

    function handleAnswerSubmit(data) {
        mainApi.createProgress(data)
        // делаем апи запрос на задание, получаем ответ, сравниваем с формой, 
        // если верно, делаем запрос на прогресс и переводим на следующее
        // если нет - обновляем форму и пишем, что ответ неверный
    }

    function showLastCheckpoint(id) {
        // делаем запрос на последнее задание, возвращаем его

    }

    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<Main onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} 
                onSignOutClick={handleSignOutClick} isLoggedIn={isLoggedIn} />} />
                <Route path="/games" element={<Games isLoggedIn={isLoggedIn} />} />
                <Route path="/create-game" element={<CreateGame isLoggedIn={isLoggedIn} onClose={closeAllPopups} onSubmit={handleCreateGame} 
                onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} onSignOutClick={handleSignOutClick} isOpened={isCheckpointOpened} onCheckpointClick={handleCheckpointClick} />} />
                <Route path="/profile" element={<Profile currentUser={currentUser} />} />
                <Route path="/map" element={<GameMap isOpened={isAnswerOpened} onClose={closeAllPopups} onClick={handleAnswerClick} checkpointNumber={checkpointNumber} />} />
            </Routes>    
            <Login isOpened={isLoginOpened} onRegisterClick={handleRegisterClick} onRecoveringClick={handleRecoveringClick} onClose={closeAllPopups} onSubmit={handleLogin} />
            <Register isOpened={isRegisterOpened} onLoginClick={handleLoginClick} onClose={closeAllPopups} onSubmit={handleRegister} />
            <Recovering isOpened={isRecoveringOpened} onClose={closeAllPopups} />
        </div>
    )
}

export default App;