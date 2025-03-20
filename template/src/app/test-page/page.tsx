"use client";

import * as SX from "./_page.sx";
import { getTestData } from "@/lib/api-endpoints";
import { useGetTestQuery } from "@/services/api";
import { useEffect } from "react";
import { Box, Button } from "@mui/material";

const TestPage = () => {
  // пример загрузки данных черех RTK Query
  const { data } = useGetTestQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // пример загрузки данных через fetch
  const fetchData = async () => {
    try {
      const data = await getTestData();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={SX.CONTAINER}>
      {/* <Preloader /> */}
      <Button type="button" onClick={fetchData}>
        Получить данные
      </Button>
    </Box>
  );
};

export default TestPage;
