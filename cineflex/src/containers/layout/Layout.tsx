import Header from '../Header/Header'

type Props = {
  children: React.ReactNode
}

const defaultProps = {
  children: <></>
}

/**
 * @description - the component provides header component and the specifies child component
 * @param param - the children component that needs to be rendered inside the layout
 * @returns - layout that consists of header
 */
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

Layout.defaultProps = defaultProps;

export default Layout;