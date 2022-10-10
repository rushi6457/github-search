import styles from "./Github.module.css";

import {
  Container,
  Input,
  Stack,
  Heading,
  Button,
  Box,
  Image,
  Grid
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
function Github() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const getData = () => {
    return axios.get(`https://api.github.com/search/users?q=${query}`);
  };
  const handleInput = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getData().then((res) => {
      console.log(res.data.items);
      return setData(res.data.items);
    });
  }, [query]);

  return (
    <>
      <Heading
        letterSpacing="2px"
        marginBottom="-20px"
        marginLeft="-700px"
        textDecoration="none"
      >
        Search Github Users
      </Heading>
      {/* <Container> */}
      <Stack>
        <Input
          size="lg"
          border="2px solid"
          backgroundColor="black"
          color="white"
          margin="auto"
          marginTop="50px"
          width="80%"
          placeholder="Search..."
          type="text"
          name="name"
          value={query}
          onChange={handleInput}
        ></Input>
      </Stack>

      {/* </Container> */}
      <Grid>
        {data.map((el) => (
          <Box
            backgroundColor="black"
            color="white"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            marginTop="20px"
            borderRadius="30px"
            marginLeft="10%"
            marginRight="10%"
            width="80%"
            alignItems="center"
            border="2px solid grey"
            display="flex"
            justifyContent="space-around"
          >
            <Image
              marginLeft="-12%"
              boxSize="150px"
              // borderRadius='30px'
              src={el.avatar_url}
            />
            <Box backgroundColor="black">
              <label className={styles.label} htmlFor="">
                LOGIN ID:
              </label>
              <Heading backgroundColor="black" as="h4" size="md">
                {el.login}
              </Heading>
            </Box>
            <Box>
              <label className={styles.label} htmlFor="">
                USER TYPE:
              </label>
              <Heading backgroundColor="black" as="h6" size="sm">
                {el.type}
              </Heading>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
}
export default Github;
//https://api.github.com/search/users?q={query}{&page,per_page,sort,order}
/*
.filter(el=>{
          const searchTerm = query.toLocaleLowerCase()
          const login  =el.login.toLocaleLowerCase()
          return login && login.startWith(searchTerm)
        })      
*/
