interface headerProps {
  name: string
}

const Header = (props: headerProps): JSX.Element => {
  return <h1>{props.name}</h1>
} 

export default Header;