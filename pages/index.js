import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/layout/layout';
import useStyles from '../utils/styles';
import { Box, Link } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';

export default function Home() {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.nomelacontainer}>
        <Box flexGrow={1} justifyContent="center" alignContent="center" pt={3}>
          <h1 className={classes.gede1}>Hector Guzman</h1>
          <h2 className={classes.gede2}>
            Solutions Architect & Full Stack developer
          </h2>
          <Link
            href="https://github.com/hrg81dev"
            style={{ color: 'inherit' }}
            target="_blank"
          >
            <GitHub style={{ fontSize: '30px ' }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hguzman/"
            style={{ color: 'inherit' }}
            target="_blank"
          >
            <LinkedIn style={{ fontSize: '30px' }} />
          </Link>
        </Box>
        <Box justifyContent="center" alignContent="center">
          <Image alt="Hector Guzman" src="/me.png" width="200" height="200" />
        </Box>
      </div>
    </Layout>
  );
}
