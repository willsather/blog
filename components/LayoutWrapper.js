import siteMetadata from "@/data/siteMetadata"
import headerNavLinks from "@/data/headerNavLinks"
import Logo from "@/data/logo.svg"
import Link from "./Link"
import SectionContainer from "./SectionContainer"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import ThemeSwitch from "./ThemeSwitch"

const LayoutWrapper = ({ children }) => {
  return (
      <div className="flex h-screen flex-col justify-between mx-8">
        <header className="flex items-center justify-between pt-7 pb-10">
          <div>
            <Link href="https://sather.ws" target="_self" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo className="h-24 w-24 fill-gray-900 dark:fill-gray-100" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target="_self"
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>

        <SectionContainer>
          <main className="h-screen mb-auto">{children}</main>
        </SectionContainer>

        <Footer />
      </div>
  )
}

export default LayoutWrapper
