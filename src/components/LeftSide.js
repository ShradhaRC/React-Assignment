
import React, { useEffect, useState } from 'react'
import "./LeftSide.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../components/images/logo.png'
import GroupIcon from '@material-ui/icons/Group';
import Singlecomponent from './Singlecomponent';
import RoundChart from './RoundChart';
import Progressbar from './Progressbar';
import Linechartdata from './Linechartdata';
import Routesdata from './Routesdata';
import Doughnutchart from './Doughnutchart';
import Datagrid from './Datagrid';
import Home from '@material-ui/icons/Home'
import ThumbUpAltIcon from '@material-ui/icons/ThumbDownAlt'
import TextsmsIcon from '@material-ui/icons/TextsmsTwoTone';
import AddBoxSharp from '@material-ui/icons/AddBoxSharp'
import BiLogoYoutube from '@material-ui/icons/YoutubeSearchedFor'
import Doughnutchart2 from './Doughnutchart2';
import Blogpost from './Blogpost';
import Feeadack from '@material-ui/icons/Feedback'
import View from '@material-ui/icons/ViewDay'



function LeftSide(){

    const value1 = useState(200.2);
    const value2 = useState(1.1);
    const value3 = useState(7.6);
    const value4 = useState(5);

    // useEffect(() => {
    //     setValue();
    // }}
    
    return(
     <>
   
   <Container className='top-hdng'>
    <Row className='hdr1'>
        <Col md={6}>
        <div className='content'>
        <h6 className='frst'><span><Home /> Home page</span></h6>
        </div>
        </Col>
        
        <Col md={6}>
            <div className='content'>
            <h6 className='snd'><span><BiLogoYoutube />Get to know information</span></h6>
            </div>
        </Col>

    </Row>
    </Container>
        <div className='line'><hr></hr></div>
        
        <Container className='blw-hori'>
        <Row>
            <Col>
            <div className='boxshadow'>
            <div className='box-size'>
            <span><GroupIcon /> Fallowers</span>
               <br></br>
                <span><b>{value1}K</b></span>
                </div>
            </div>
            </Col>

            <Col>
            <div className='boxshadow'>
                <div className='box-size'>
            <span><ThumbUpAltIcon /> Likes</span>
               <br></br>
                <span><b>{value2}K</b></span>
                </div>
            </div>
            </Col>
        </Row>
        <Row>
        <Col>
        <div className='boxshadow'>
        <div className='box-size'>
            <span><TextsmsIcon /> Comments</span>
               <br></br>
                <span><b>{value3}%</b></span>
                </div>
            </div>
            </Col>
            <Col>
            <div className='boxshadow'>
            <div className='box-size'>
            <span><AddBoxSharp /> Published</span>
               <br></br>
                <span><b>{value4}</b> </span>
                </div>
            </div>
          </Col>
        </Row>
     </Container>

     <Container>
     <Singlecomponent />
     </Container>
     
     <Container className='pghd'>
        <Row className='prgs-hd'>
        
        <Col xs={6} style={{ color:'#fff' }} className='pbar'>
            <span  style={{padding:'10px 0px'}}>
        <Progressbar />
        </span>
       
        </Col>
        <Col xs={6} className='rnd-chrt'>
        <RoundChart />
        </Col>
        </Row>
        </Container>
        <Container className='lne-chrt'>
            <Row className='lne-chrt1'>
                <Col className='lne-chrt2'>
                <Linechartdata/>
                </Col>
            </Row>
        </Container>
        <Container className='rts-dta'>
            <Row>
                <Col>
                <Routesdata />
                </Col>
            </Row>
        </Container>

        <Container className='dught-sec'>

            <Row>
            <Col xl={12} style={{padding: '0px 15px;'}}>
            <h2 style={{background:'rgb(56 52 52)',padding:'10px 40px'}}>Attendance Data</h2>
            </Col>
                <Col className='dflex twodata'>
             
                <div style={{width:'50%',background:'#383434'}}>
                <Doughnutchart/>
  
                </div>
              
                <div style={{width:'50%',background:'#383434'}}>
                <Doughnutchart2 />
     
                </div>
             
                </Col>
            </Row>
        </Container>
        <Container className='prs-brchrt'>
        <Row className='prs-brchrtr'>
            <Col>
            <div style={{background:'rgb(56 52 52)',padding:'20px;'}}>
        <Row>
            <Col>
                <h2>Performance</h2>
            </Col>
        </Row>
        <Row className='prs-brchrtc'>
        <Col>
        <h6><View />Views of the day</h6>        
            <h2>ViewDay</h2>        
        </Col>
        <Col>
            
            <h6><Feeadack />Inaformation</h6>
            <h2>View</h2>  
        </Col>
        </Row>
            <Row className='dtagrd'>
                <Col>
                <Datagrid/>
                </Col>
            </Row>
            </div>
            </Col>
        </Row>
      
        </Container>
        <Container className='blg-pst'>
            <Row className='blg-pstr'>
                <Col>
                    <Blogpost />
                </Col>
            </Row>
        </Container>
     </>   
    )
}
export default LeftSide