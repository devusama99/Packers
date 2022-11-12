import { Grid, Typography, Container, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import {
  BsExclamationTriangleFill,
  BsGlobe,
  BsMegaphoneFill,
  BsPeopleFill,
} from "react-icons/bs";
import SearchFeild from "../components/shared/SearchFeild";
import Table from "react-bootstrap/Table";
import TableActions from "../components/users/TableActions";

const data = new Array(10).fill(0).map(() => ({
  fullName: "Shaheer Ahmad",
  email: "Shaheer@gmail.com",
  phoneNo: Math.floor(Math.random() * 100000000000),
  warnings: Math.floor(Math.random() * 4),
  type: ["freelancer", "campaign-admin"][Math.floor(Math.random() * 2)],
  id: Math.floor(Math.random() * 1000000),
  profileImg: "https://i.pravatar.cc/300",
}));

export default function Users() {
  const userTypes = [
    "all_users",
    "freelancers",
    "campaign_admin",
    "warned_users",
  ];
  const [activeType, setActiveType] = useState("all_users");
  const [activeData, setActiveData] = useState(data);

  const setData = useCallback(() => {
    if (activeType === "all_users") {
      allUsers();
    } else if (activeType === "freelancers") {
      freelancers();
    } else if (activeType === "campaign_admin") {
      campaignAdmin();
    } else if (activeType === "warned_users") {
      warningsUsers();
    }
  }, [activeType]);

  const allUsers = () => {
    setActiveData([...data]);
  };

  const freelancers = () => {
    setActiveData([...data.filter((item) => item.type === "freelancer")]);
  };

  const campaignAdmin = () => {
    setActiveData([...data.filter((item) => item.type === "campaign-admin")]);
  };

  const warningsUsers = () => {
    setActiveData([...data.filter((item) => item.warnings)]);
  };

  function getIcon(userTypes, activeType) {
    // eslint-disable-next-line
    switch (userTypes) {
      case "all_users":
        return (
          <BsPeopleFill
            size={30}
            className={`${
              activeType === "all_users" ? "text-white" : "text-primary"
            }`}
          />
        );
      case "freelancers":
        return (
          <BsGlobe
            size={30}
            className={`${
              activeType === "freelancers" ? "text-white" : "text-primary"
            }`}
          />
        );
      case "campaign_admin":
        return (
          <BsMegaphoneFill
            size={30}
            className={`${
              activeType === "campaign_admin" ? "text-white" : "text-primary"
            }`}
          />
        );
      case "warned_users":
        return (
          <BsExclamationTriangleFill
            size={30}
            className={`${
              activeType === "warned_users" ? "text-white" : "text-primary"
            }`}
          />
        );
    }
  }

  useEffect(() => {
    setData();
  }, [setData]);
  return (
    <>
      <Typography variant="h6">Users</Typography>
      <div className=" d-flex align-items-center justify-content-start">
        <Container maxWidth="md" className="m-0 p-0 mt-3">
          <Grid container spacing={3}>
            {userTypes.map((item, i) => (
              <Grid item xs={6} md={3} key={"grid-item" + i}>
                <Box
                  onClick={() => {
                    setActiveType(item);
                  }}
                  sx={{
                    padding: 2,
                    boxShadow: " 0px 4px 71px rgba(0, 0, 0, 0.04)",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                  className={`d-flex flex-column align-items-center justify-content-center ${
                    item === activeType ? "bg-primary" : "bg-white"
                  }`}
                >
                  {getIcon(item, activeType)}
                  <Typography
                    className={`mt-3 text-capitalize d-block  ${
                      item === activeType ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.split("_").join(" ")}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12}>
              <SearchFeild placeholder="Search user by name,email...." />
            </Grid>
            <Grid item xs={12}>
              <Table responsive>
                <thead className="text-muted">
                  <tr>
                    <th>
                      <Typography>Name</Typography>
                    </th>
                    <th>
                      {" "}
                      <Typography>Phone</Typography>
                    </th>
                    <th>
                      {" "}
                      <Typography>Email</Typography>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.map((item, i) => (
                    <tr key={"data-row-" + i}>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar src={item.profileImg} />
                          <div className="m-1"></div>
                          <Typography variant="body2">
                            {item.fullName}
                          </Typography>
                          <div
                            className={`d-flex align-items-end ${
                              item.warnings ? "d-block" : "d-none"
                            }`}
                          >
                            <BsExclamationTriangleFill className="text-danger mx-2" />
                            <Typography
                              variant="caption"
                              sx={{ lineHeight: 0.8 }}
                            >
                              {item.warnings}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="align-items-center ">
                        <Typography variant="body2" className="text-muted">
                          {item.phoneNo}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="body2" className="text-muted">
                          {item.email}
                        </Typography>
                      </td>
                      <td>
                        <TableActions />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
