import Link from "next/link"

function ItemFooter({href, target, rel, text, icon}) {
  return (
      <Link href={href} passHref>
        <li className="h-12 w-full text-primary-text flex items-center justify-between hover:bg-card cursor-pointer px-8">
          <a target={target} rel={rel}>{text}</a>
          {icon && 
            <svg className="stroke-secondary-text stroke-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.62547 9.63124L5.30623 6.75816C5.26579 6.39418 5.26579 6.02684 5.30623 5.66286L5.329 5.45796C5.57049 3.28457 7.27909 1.56492 9.45088 1.30941C9.8157 1.26649 10.1843 1.26649 10.5491 1.30941C12.7209 1.56492 14.4295 3.28458 14.671 5.45797L14.6938 5.66286C14.7342 6.02684 14.7342 6.39418 14.6938 6.75816L14.4128 9.28682C14.3929 9.46552 14.256 9.60783 14.0799 9.64411C13.0843 9.84926 12.1659 10.2658 11.3738 10.8448C11.2996 10.899 11.2099 10.9281 11.1181 10.9256C9.55158 10.8828 7.98322 10.93 6.42078 11.0672L5.28633 11.1668C4.76159 11.2129 4.3369 11.6127 4.25935 12.1338C3.92712 14.3656 3.92712 16.6343 4.25935 18.8662C4.3369 19.3872 4.76159 19.7871 5.28633 19.8332L6.42078 19.9328C7.36683 20.0159 8.31506 20.0659 9.26373 20.083C9.40266 20.0855 9.53002 20.1596 9.60509 20.2765C9.82384 20.6172 10.0713 20.9378 10.3441 21.2347C10.4654 21.3667 10.377 21.5883 10.1978 21.5892C8.89387 21.5953 7.58974 21.5412 6.28956 21.427L5.15511 21.3274C3.93935 21.2206 2.95539 20.2942 2.7757 19.0871C2.42167 16.7088 2.42167 14.2912 2.7757 11.9129C2.95539 10.7058 3.93935 9.77931 5.15511 9.67255L5.62547 9.63124ZM9.62614 2.79914C9.87452 2.76992 10.1255 2.76992 10.3739 2.79914C11.8525 2.97309 13.0158 4.1439 13.1802 5.62361L13.2029 5.82851C13.2311 6.08239 13.2311 6.33862 13.2029 6.59251L12.879 9.50814C10.9619 9.37772 9.03812 9.37772 7.12102 9.50814L6.79706 6.59251C6.76885 6.33862 6.76885 6.08239 6.79706 5.82851L6.81983 5.62361C6.98424 4.1439 8.14751 2.97309 9.62614 2.79914Z"/>
              <path d="M16.25 15C16.25 14.5858 15.9142 14.25 15.5 14.25C15.0858 14.25 14.75 14.5858 14.75 15V16.7727C14.75 17.0127 14.8648 17.2381 15.0589 17.3793L16.0589 18.1065C16.3939 18.3502 16.8629 18.2761 17.1066 17.9411C17.3502 17.6061 17.2761 17.1371 16.9411 16.8934L16.25 16.3908V15Z"/>
              <path fillRule="evenodd" d="M15.5 22C18.5376 22 21 19.5375 21 16.5C21 13.4624 18.5376 11 15.5 11C12.4624 11 10 13.4624 10 16.5C10 19.5375 12.4624 22 15.5 22ZM15.5 20.5C17.7091 20.5 19.5 18.7091 19.5 16.5C19.5 14.2908 17.7091 12.5 15.5 12.5C13.2909 12.5 11.5 14.2908 11.5 16.5C11.5 18.7091 13.2909 20.5 15.5 20.5Z"/>
            </svg>
          }
        </li>
      </Link>
  );
};

export default ItemFooter;