import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between py-4
         mx-4 lg:mx-9 border-b-2  items-center'>
             <h1 className=' text-2xl md:text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="" />

        </header>
    );
};

export default Header;