import { Logout } from "@/components/layout/Logout"
import { InProcessScreen } from "@/screens/public/inprocess/InProcessScreen"

export const UserScreen = () => {
  return (
    <div>
        <div className="flex flex-col">
            <InProcessScreen />
            <Logout />
        </div>
    </div>
  )
}
