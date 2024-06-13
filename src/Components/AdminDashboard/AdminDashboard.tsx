import { FaDollarSign } from "react-icons/fa"
import { IoBagCheck } from "react-icons/io5"
import './AdminDashboard.css'
import LineGraph from "./LineGraph"

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            
            <h1 id="reports">Reports</h1>

            <div className="reports">

                <div className="report">
                    <div className="report-left">
                        <IoBagCheck size={40} />
                    </div>
                    <div className="report-right">
                        <h1>Orders</h1>
                        <p>5610</p>
                    </div>
                </div>

                <div className="report">
                    <div className="report-left">
                        <IoBagCheck size={40} />
                    </div>
                    <div className="report-right">
                        <h1>Products</h1>
                        <p>5610</p>
                    </div>
                </div>


                <div className="report">
                    <div className="report-left">
                        <IoBagCheck size={40} />
                    </div>
                    <div className="report-right">
                        <h1>Transactions</h1>
                        <p>5610</p>
                    </div>
                </div>

                <div className="report">
                    <div className="report-left">
                        <FaDollarSign size={40} />
                    </div>
                    <div className="report-right">
                        <h1>Warehouse Capacity</h1>
                        <p>5610</p>
                    </div>
                </div>
            </div>

            <div className="graph-part">
                <LineGraph />

            </div>

        </div>
    )
}

export default AdminDashboard