import { Card } from '@material-ui/core';
import React from 'react';
import { PortfolioBodyCardHeader } from '../PortfolioBodyCardHeader';
import * as u from '../../data.json';
import './styles.css';

export const PortfolioBodyLeftCard = () => {
  const user = u.default.user;
  return <div className="col-md-8">
    <Card>
      <PortfolioBodyCardHeader header="Work Experience" style={{ fontSize: '22px' }} />
    </Card>
    <Card style={{ marginTop: '5px', border: "1px solid #D9B08C" }} variant="outlined">
      {user.work_experience.map((w, index) =>
        <div style={{ padding: '1%' }} key={index}>
          <p className="companyName"> {w.company_name} </p>
          {w.details.map((d, index) =>
            <div className="workExpDetails" key={index}>
              <span className="companyPosition">{d.position}</span>
              <span>
                <div className="companyDate">
                  <p className="companystartDate">
                    <span className="startDateMonth">{d.startDate.month}</span> <span className="startDateYear">{d.startDate.year} - </span>
                    <span className="companyendDate">
                      {d.presentlyWorking ?
                        <span className="presentlyWorking"> PRESENT </span> :
                        <>
                          <span className="endDateMonth">{d.endDate.month}</span> <span className="endDateYear">{d.endDate.year}</span>
                        </>
                      }
                    </span>
                  </p>
                </div>
              </span>
              {w.detailsVisible ?
                <>
                  <p className="companylocation">{d.location.city}, {d.location.state}, {d.location.country}</p>
                  <div className="companydescription"> {d.description.map((desc, index) => <p className="companydescriptionPoints" key={index}>&#x2756; {desc}</p>)}</div>
                </> : <></>}
            </div>
          )}
        </div>)}
    </Card>
  </div>;
}