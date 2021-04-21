import React, { useState, useCallback } from 'react';

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@material-ui/core';

import { useStyles } from './styles';

const postsList = [1,2,3,4,5,6,7,8,9];

export const PostsList = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState(postsList);
  const [addOpen, setAddOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  const handleAddOpen = () => {
    setAddOpen(true);
  }

  const handleAddClose = () => {
    setAddOpen(false);
  }

  const handleRemove = useCallback((id) => {
    const newPostsList = posts.filter(product => product !== id);
    setPosts(newPostsList);
    setRemoveOpen(false);
  }, [posts]);

  const handleRemoveOpen = (event) => {
    console.log(event);
    setRemoveOpen(true);
  }

  const handleRemoveClose = () => {
    setRemoveOpen(false);
  }

  return (
    <main>
      <div className={classes.mainContent}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Posts list
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddOpen}
                >
                  Add post
                </Button>
                <Dialog
                  open={addOpen}
                  onClose={handleAddClose}
                  aria-labelledby="form-dialog-title-add"
                >
                  <DialogTitle id="add-dialog-title">Add post</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Title"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      id="description"
                      label="Body"
                      type="text"
                      fullWidth
                      multiline
                    />
                    <TextField
                      margin="dense"
                      id="description"
                      label="Image Url"
                      type="text"
                      fullWidth
                    />

                  </DialogContent>
                  <DialogActions>
                    <Button
                      size="small"
                      color="primary"
                      // onClick={}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      onClick={handleAddClose}
                      color="secondary"
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((product) => (
            <Grid item key={product} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://picsum.photos/200/300"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Post title
                  </Typography>
                  <Typography>
                    Post body
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={handleRemoveOpen}
                  >
                    Remove
                  </Button>
                  <Dialog
                    open={removeOpen}
                    onClose={handleRemoveClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="remove-dialog-title">Remove the post</DialogTitle>
                    <DialogContent>
                      <DialogContentText>Are you sure you want to remove the post?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleRemove(product)}
                      >
                        Remove
                      </Button>
                      <Button
                        size="small"
                        onClick={handleRemoveClose}
                        color="primary"
                      >
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}