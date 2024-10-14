import errorImg from './../../resources/gifs/icons8-box-important.gif'; // from Icons8

const Error = () => {
    return (
        <div className='error' style={{fontSize: '25px', margin: '0 auto'}}>
            <img src={errorImg} alt="error" style={{display:'block', margin: '0 auto'}}/>
            <div className="error-text">
                Произошла ошибка при обращении к серверу.
            </div>
        </div>
    )
}

export default Error;