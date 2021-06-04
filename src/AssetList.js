import React, { forwardRef } from 'react';
import {
  Box,
  CircularProgress,
  GridList,
  GridListTile,
  colors,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import NextImage from 'next/image';
import MuiImage from 'material-ui-image';
import querystring from 'querystring';
import useSWR from 'swr';

const useStyles = makeStyles(theme => ({
  loading: {
    height: theme.spacing(5),
    textAlign: 'center'
  },
  tile: {
    height: '100% !important',
    padding: `${theme.spacing(1)}px !important`,
    [theme.breakpoints.only('xs')]: {
      padding: `${theme.spacing(0.5)}px !important`
    }
  },
  avatar: {
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(0.5)
    }
  }
}));

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AssetList = forwardRef((props, ref) => {
  const classes = useStyles();
  const queryParams = querystring.stringify({
    order_direction: 'desc',
    offset: 0,
    limit: 20
  });
  const url = `https://api.opensea.io/api/v1/assets?${queryParams}`;
  const { data, error } = useSWR(url, fetcher);
  console.log(data);

  return error ? (
    <Alert severity="error">Failed to load data</Alert>
  ) : !data ? (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  ) : (
    <GridList cols={2}>
      {data.assets.map((asset, index) => {
        const url = asset.image_original_url || asset.image_preview_url || asset.image_thumbnail_url || '/placeholder.png'; // avoid null src
        return (
          <GridListTile key={index} className={classes.tile}>
            <MuiImage
              src={url}
              errorIcon={( // finish loading if no image exists in url
                <NextImage
                  src="/placeholder.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              )}
              className={classes.avatar}
            />
          </GridListTile>
        );
      })}
    </GridList>
  );
});

export default AssetList;
