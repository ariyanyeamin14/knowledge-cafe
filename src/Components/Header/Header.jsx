import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center w-[90%] md:w-[80%] mx-auto py-5 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowlwdge Cafe</h1>
            <img src={Profile} />
        </header>
    );
};

export default Header;