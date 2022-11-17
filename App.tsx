import * as React from 'react';
import {
  Box,
  Card,
  Container,
  CardMedia,
  Typography,
  CardContent,
  Grid,
} from '@mui/material';
import { v4 } from 'uuid';
import { ThemeProvider } from '@mui/material/styles';

import './style.css';
import {
  MyResponsiveBar,
  MyResponsiveLine,
  MyResponsiveChord,
  MyResponsiveFunnel,
  MyResponsiveCirclePacking,
  MyResponsiveMarimekko,
  MyResponsivePie,
  MyResponsiveRadar,
  MyResponsiveRadialBar,
  MyResponsiveStream,
} from './components';

import {
  line,
  bar,
  chord,
  funnel,
  circlePacking,
  marimekko,
  pie,
  radar,
  radialBar,
  stream,
} from './data';
import { theme } from './styles/theme';

export default function App() {
  const charts = [
    <MyResponsiveChord data={chord} />,
    <MyResponsiveLine data={line} />,
    <MyResponsiveRadialBar data={radialBar} />,
    <MyResponsiveFunnel data={funnel} />,
    <MyResponsivePie data={pie} />,
    <MyResponsiveMarimekko data={marimekko} />,
    <MyResponsiveBar data={bar} />,
    <MyResponsiveRadar data={radar} />,
    <MyResponsiveStream data={stream} />,
    <MyResponsiveCirclePacking data={circlePacking} />,
  ] as const;

  const convertChartsToTitles = React.useCallback(
    (chart: typeof charts[0]) => {
      return `${
        chart.type.name.match(
          /(?!Responsive)([A-Z][a-z]*[A-Z][a-z]*|[A-Z][a-z]*)$/
        )?.[0]
      }Chart`
        .split(/(?=[A-Z])/)
        .join(' ');
    },
    [charts]
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            Typescript I
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {charts.map((chart) => (
            <Grid item key={v4()} xs={12}>
              <Card variant="outlined">
                <CardMedia sx={{ height: '400px' }}>{chart}</CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {convertChartsToTitles(chart)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
