// import React, { useEffect, useState } from 'react';
// import { Box, Button, Card, CardContent, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '16px',
//   },
//   topSection: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//     backgroundColor: '#f5f5f5',
//     padding: '16px',
//     borderRadius: '8px',
//   },
//   createBlogButton: {
//     backgroundColor: '#3f51b5',
//     color: 'white',
//     '&:hover': {
//       backgroundColor: '#303f9f',
//     },
//   },
//   searchContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   blogCard: {
//     maxWidth: 400,
//     margin: 'auto',
//   },
//   blogImage: {
//     width: '100%',
//     height: 'auto',
//   },
// }));

// const Blog = ({ type }) => {
//   const classes = useStyles();
//   const [blogs, setBlogs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/posts?type=${type}`);
//         setBlogs(response.data);
//       } catch (err) {
//         console.error('Error fetching blogs:', err);
//       }
//     };

//     fetchBlogs();
//   }, [type]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredBlogs = blogs.filter((blog) =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={classes.root}>
//       <Box className={classes.topSection}>
//         <Typography variant="h4">Blogs</Typography>
        
//       </Box>
//       <Box className={classes.searchContainer}>
//         <TextField
//           variant="outlined"
//           placeholder="Search"
//           fullWidth
//           value={searchTerm}
//           onChange={handleSearchChange}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>
//       <Grid container spacing={2}>
//         {filteredBlogs.map((blog) => (
//           <Grid item key={blog._id} xs={12} sm={6} md={4}>
//             <Card className={classes.blogCard}>
//               {blog.media[0] && (
//                 <img
//                   className={classes.blogImage}
//                   src={`http://localhost:5000${blog.media[0].url}`}
//                   alt={blog.media[0].description}
//                 />
//               )}
//               <CardContent>
//                 <Typography variant="h5" component="h2">
//                   {blog.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {blog.content}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   <strong>Author:</strong> {blog.author.username}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Blog;


import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    backgroundColor: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
  },
  createBlogButton: {
    backgroundColor: '#3f51b5',
    color: 'white',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16px',
  },
  blogCard: {
    maxWidth: 400,
    margin: 'auto',
  },
  blogImage: {
    width: '100%',
    height: 'auto',
  },
}));

const Blog = ({ type }) => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/posts?type=${type}`);
        console.log(response.data); // Debugging: check the response data
        setBlogs(response.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, [type]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.root}>
      <Box className={classes.topSection}>
        <Typography variant="h4">Blogs</Typography>
      </Box>
      <Box className={classes.searchContainer}>
        <TextField
          variant="outlined"
          placeholder="Search"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Grid container spacing={2}>
        {filteredBlogs.map((blog) => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Card className={classes.blogCard}>
              {blog.media[0] && (
                <img
                  className={classes.blogImage}
                  src={`http://localhost:3000${blog.media[0].url}`}
                  alt={blog.media[0].description}
                />
              )}
              <CardContent>
                <Typography variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {blog.content}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Author:</strong> {blog.author.username}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
