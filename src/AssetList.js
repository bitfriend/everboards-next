import React, { forwardRef } from 'react';
import {
  Box,
  CircularProgress,
  GridList,
  GridListTile,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import NextImage from 'next/image';
import MuiImage from 'material-ui-image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

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
  assetThumb: {
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(0.5)
    },
    cursor: 'pointer'
  }
}));

function getAssetImage({ image_original_url, image_preview_url, image_thumbnail_url, image_url }) {
  // avoid null src, so that MuiImage cannot fail
  return image_original_url || image_preview_url || image_thumbnail_url || image_url || '/images/placeholder.png';
}

const AssetList = forwardRef((props, ref) => {
  const { data, error, onItemClicked } = props;

  const classes = useStyles();

  return error ? (
    <Alert severity="error">Failed to load data</Alert>
  ) : !data ? (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  ) : (
    <GridList cols={2}>
      {data.assets.map((asset, index) => (
        <GridListTile key={index} className={classes.tile}>
          <NextLink href={`/assets?contract_address=${asset.asset_contract.address}&token_id=${asset.token_id}`}>
            <a onClick={() => onItemClicked(asset.asset_contract.address, asset.token_id)}>
              <MuiImage
                src={getAssetImage(asset)}
                errorIcon={( // finish loading if no image exists in url
                  <NextImage
                    src="/images/placeholder.png"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                )}
                className={classes.assetThumb}
              />
            </a>
          </NextLink>
        </GridListTile>
      ))}
    </GridList>
  );
})

AssetList.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.bool,
  onItemClicked: PropTypes.func.isRequired
};

export default AssetList;
