import React, { Fragment, useEffect } from "react";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../action/orderAction";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../layout/Loader/Loader";
import Header from "../layout/Header/Header";
import SignInHeader from "../layout/Header/SignInHeader";
import { Toaster, toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyOrders = (props) => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 300,
      flex: 1,
      renderCell: (params) => <a href={`/order/${params.row.id}`}>${params.row.id}</a>,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <Fragment>
      <Helmet><title>Orders
        </title></Helmet>
      <Toaster reverseOrder={false} position="top-center" />
      {props.isAuthenticated === true ? (
        <Header user={props.user} isAuthenticated={props.isAuthenticated} />
      ) : (
        <SignInHeader />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
