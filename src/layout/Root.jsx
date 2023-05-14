
import Sidebar from '../components/Sidebar'
import Display from '../components/Display'

const Root = () => {
  return (
    <div className="w-[80%] h-[85%] relative  p-4 rounded-md bg-blue-50 bg-[url('https://dynamicwallpaper.club/landing-vids/poster.jpg')] bg-cover bg-no-repeat cs-shadow flex gap-6 items-center">
        <Sidebar/>
        <Display/>
    </div>
  )
}

export default Root