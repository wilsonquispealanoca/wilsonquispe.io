import { useRouter } from 'next/router'

const Activelink = ({href, children}) => {
  const router = useRouter()
  const style = {
    color: router.asPath === href && "#222A27",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick} style={style} className="mr-8 first:mr-10 dark:text-primary-dark text-primary-text hidden lg:block">
      {children}
    </a>
  );
}

export default Activelink;