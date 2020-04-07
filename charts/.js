import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import CONFIG from 'config'
import UptimeChart from 'Uptime'
import PreformanceChart from 'Performance'
import VulnerabilityChart from 'Vulnerability'
import VulnerabilityFamilyChart from 'VulnerabilityFamily'
import VulnerabilityTrendChart from 'VulnerabilityDetectionTrend'
import VulnerabilityTrendChartBox from 'VulnerabilityDetectionTrendBox'
import RadialBarChart from 'RadialBar'
import PageLoadChart from 'PageLoad'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col md={10}>
            <UptimeChart />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div className="box">
              <h6 className="box-title">PERFORMANCE OVER TIME</h6>
              <PreformanceChart />
            </div>
          </Col>
          <Col>
            <div className="box">
              <h6 className="box-title">VULNERABILITY DETECTION TREND</h6>
              <VulnerabilityChart />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="box">
              <h6 className="box-title">VULNERABILITY FAMILY</h6>
              <VulnerabilityFamilyChart />
            </div>
          </Col>
          <Col>
            <div className="box bg-none">
              <h6 className="box-title">VULNERABILITY DETECTION TREND BOXs</h6>
              <Row noGutters>
                <Col>
                  <VulnerabilityTrendChartBox color={CONFIG.VulnerabilityChartBackColors[0]} />
                </Col>
                <Col>
                  <VulnerabilityTrendChartBox color={CONFIG.VulnerabilityChartBackColors[1]} />
                </Col>
              </Row>
              <Row noGutters className="mt-5">
                <Col>
                  <VulnerabilityTrendChartBox color={CONFIG.VulnerabilityChartBackColors[2]} />
                </Col>
                <Col>
                  <VulnerabilityTrendChartBox color={CONFIG.VulnerabilityChartBackColors[3]} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="full-width">
            <h6 className="box-title">VULNERABILITY DETECTION TREND</h6>
            <VulnerabilityTrendChart />
          </Col>
        </Row>
        <Row className={'justify-content-center'}>
          <Col md={10}>
            <Row>
              <Col>
                <div className="box radial">
                  <h6 className="box-title">BOX RADIALBAR</h6>
                  <RadialBarChart />
                </div>
              </Col>
              <Col>
                <div className="box radial">
                  <h6 className="box-title">BOX RADIALBAR</h6>
                  <RadialBarChart />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="full-width">
            <h6 className="box-title">PAGE LOAD TIME</h6>
            <PageLoadChart />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
