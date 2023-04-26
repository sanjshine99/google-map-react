import React, { ReactNode } from "react";
import GoogleMapReact, { fitBounds } from "google-map-react";
import { Box } from "@mui/material";
import { JsxElement } from "typescript";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Avatar from "../src/assets/img/Avatar.png";

const CustomMarker = ({
  lat,
  lng,
  child,
}: {
  lat: number;
  lng: number;
  child: JSX.Element;
}) => child;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 7.8742,
      lng: 80.6511,
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <>
      <h1>Hello Your Google Map Is Ready</h1>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "Your_Api_Goes_Here" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <CustomMarker
            lat={7.8742}
            lng={80.6511}
            child={
              <Box
                component={"img"}
                src={Avatar}
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50px",
                }}
              ></Box>
            }
          />
          <CustomMarker
            lat={7.7071}
            lng={80.6521}
            child={
              <Box
                sx={{
                  bgcolor: "#D03636",
                  borderRadius: "50%",
                  display: "inline-block",
                  p: 0.3,
                }}
              >
                <PlaceOutlinedIcon sx={{ color: "white" }} />
              </Box>
            }
          />
        </GoogleMapReact>
      </div>
    </>
  );
}
