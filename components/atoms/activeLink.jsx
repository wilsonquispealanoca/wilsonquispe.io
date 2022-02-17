import { useRouter } from 'next/router'

const Activelink = ({href, children}) => {
  const router = useRouter()
  const style = {
    textDecoration: router.asPath === href && "#222A27",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick} style={style} className="mr-8 first:mr-10 dark:text-primary-dark text-primary-text hidden lg:block transition-all duration-200 hover:pb-2 hover:border-b-2 hover:border-primary-text hover:dark:border-primary-dark">
      {children}
    </a>
  );
}

export default Activelink;