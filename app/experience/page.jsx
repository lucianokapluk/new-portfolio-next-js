
import Container from "../components/containers/Container"
import './experience.css'
export default function ExperiencePage() {

    return (

        <Container title={"Experience"}>





            <div className="rb-container">
                <ul className="rb">
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            3rd May 2020
                        </div>
                        <div className="item-title">Chris Serrano posted a photo on your wall.</div>

                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            19th May 2020
                        </div>
                        <div className="item-title">Mia Redwood commented on your last post.</div>

                    </li>

                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            17st June 2020
                        </div>
                        <div className="item-title">Lucas McAlister just send you a message.</div>

                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            17st June 2020
                        </div>
                        <div className="item-title">Lucas McAlister just send you a message.</div>

                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            17st June 2020
                        </div>
                        <div className="item-title">Lucas McAlister just send you a message.</div>

                    </li>

                </ul>

            </div>

        </Container>








    )
}
