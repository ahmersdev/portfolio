"use client";

import dynamic from "next/dynamic";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { MUIBORDERRADIUS15, MUIPRIMARYCOLOR } from "@/contants/variables";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/config/firestore";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AllProjects = () => {
  const [arr, setArr] = useState<any>(null);

  const DBARRAY = async () => {
    let ARRAY: any = [];
    try {
      const array = await getDocs(collection(db, "PROJECTSPAGE"));

      array.forEach((data: any) => {
        ARRAY.push({
          id: data.id,
          ...data.data(),
        });
      });

      setArr(ARRAY);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    DBARRAY();
  }, []);

  return (
    <Box paddingX={"4%"} paddingTop={{ xs: "4%", md: "unset" }}>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        showSystemCursor={true}
        trailingSpeed={5}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <Grid container spacing={5}>
        {arr?.map((item: any, index: any) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img
              src={`${item?.src ?? "/"}`}
              alt={item?.alt ?? "ahmersdev"}
              style={{
                width: "100%",
                height: "100%",
                border: `2px solid ${MUIPRIMARYCOLOR}`,
                borderRadius: MUIBORDERRADIUS15,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProjects;
