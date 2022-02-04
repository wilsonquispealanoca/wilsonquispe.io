import { useRouter } from 'next/router'

const Activelink = ({href, children}) => {
  const router = useRouter()
  const style = {
    color: router.asPath === href && "#8766CC",
    fontWeight: router.asPath === href && "bold",
    textDecoration: router.asPath === href && "underline",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick} style={style} className="mr-8 first:mr-10 dark:text-secondary-dark text-secondary-text hidden lg:block">
      {children}
    </a>
  );
}

export default Activelink;