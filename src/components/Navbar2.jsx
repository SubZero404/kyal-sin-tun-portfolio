import StaggeredMenu from './StaggeredMenu/StaggeredMenu';

const Navbar2 = () => {

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    {
      label: "Services",
      ariaLabel: "View our services",
      link: "/services",
    },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  return (
    <nav className="w-full overflow-hidden">
      <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#b91c1c', '#7f1d1d']}
          accentColor="#b91c1c"
          isFixed={true}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
    </nav>
  )
}
export default Navbar2