export default function Footer() {
  return (
    <div className="container mx-auto flex max-w-4xl p-4 text-sm">
      <p className="flex-grow">
        &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
      </p>
      <ul className="flex flex-nowrap gap-2">
        <li>
          <a href="https://www.linkedin.com/in/raphael-alexsandro-25331a237/"><img src="images/linkedin.svg"/></a>
        </li>
        <li className="text-gray-500">&middot;</li>
        <li>
          <a href="https://github.com/RaphaelSBarros"><img src="images/github.svg"/></a>
        </li>
      </ul>
    </div>
  )
}