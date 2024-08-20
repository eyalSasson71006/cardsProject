import React from "react";
import PageHeader from "../components/PageHeader";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../layout/footer/Footer";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="On this page you can find all business cards from all categories"
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ m: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel voluptates, inventore minus in ut? Quam officia a, ullam cupiditate consequatur quo tempore quos architecto facilis impedit, veniam voluptatibus ipsum dolorem voluptatum commodi enim repudiandae molestiae! Voluptates provident sed ratione eligendi quas numquam atque, alias rerum aut quasi, labore eveniet asperiores maxime, architecto repellat cumque maiores adipisci placeat porro accusantium fugit culpa nam distinctio! Voluptates est ut ducimus non blanditiis! Itaque exercitationem, vitae qui voluptate porro et nemo asperiores ea sunt ipsam eius quos hic ducimus praesentium. Illo dolores porro doloremque, necessitatibus accusamus eaque iusto fuga iste delectus pariatur? Tempore facilis expedita tenetur in excepturi, quasi possimus commodi ad atque sequi laboriosam, quo veritatis, amet magni non eaque. Tenetur vitae placeat quidem? Animi, ipsa! Asperiores debitis, totam quidem, soluta tempore fuga officiis aliquid earum laudantium ut deleniti quia sint eveniet impedit temporibus, unde ad dicta eligendi quibusdam veritatis vitae autem?
        </Typography>
        <img style={{width:"100%", maxWidth:"300px"}} src="/cardPreview.png" alt="card preview" />
      </Box>
    </>
  );
}
