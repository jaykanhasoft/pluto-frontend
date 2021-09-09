import Shifts from "./pages/BrowserShift/Shifts";
import ShiftsDetail from "./pages/BrowserShift/ShiftsDetail";
import ComplainceDetail from "./pages/Compliance/ComplainceDetail";
import Compliance from "./pages/Compliance/Compliance";
import MyShift from "./pages/MyShift/MyShift";
import Profile from "./pages/Profile/Profile";

const Routes = [
    {
        name:"Shift",
        path:"shifts",
        component:Shifts,
    },
    {
        name:"My Shifts",
        path:"my-shifts",
        component:MyShift
    },
    {
        name:"My Shifts",
        path:"profile/documents",
        component:Compliance
    },
    {
        name:"My Shifts",
        path:"profile/documents/:id",
        component:ComplainceDetail
    },
    {
        name:"Profile",
        path:"profile",
        component:Profile
    }
]

export default Routes