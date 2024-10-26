import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const items = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

    return {
      label: (value.charAt(0).toUpperCase() + value.slice(1)).replace("-", " "),
      path: to,
    };
  });

  return (
    <Breadcrumbs separator="›">
      <Link
        underline="hover"
        onClick={() => {
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      >
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return isLast ? (
          <Typography color="text.primary" key={item.path}>
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.path}
            underline="hover"
            onClick={() => navigate(item.path)}
            style={{ cursor: "pointer" }}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
