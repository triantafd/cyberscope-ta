import React from "react";
import { Redirect } from "react-router-dom";

const NotFoundPage = ({ redirectTo }) => <Redirect to={redirectTo || "/"} />;

export default NotFoundPage;
