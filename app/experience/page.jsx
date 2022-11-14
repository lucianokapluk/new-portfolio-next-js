
import Container from "../components/containers/Container"
import './experience.css'
export default function ExperiencePage() {

    return (

        <Container title={"Experience"}>
            <div className="rb-container">
                <ul className="rb">
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            Ahora<br />VectorMGT
                        </div>
                        <div className="item-title">Desarrollador Flutter</div>

                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2020<br />Scalecoding
                        </div>
                        <div className="item-title">Test Automatizado con Cypress</div>

                    </li>

                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2020<br />Teloregalo.com.ar
                        </div>
                        <div className="item-title">Desarrollador Back-End con Laravel</div>

                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2019<br />PL Software
                        </div>
                        <div className="item-title">Desarrollo de software con C# (Windows Forms)</div>


                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2019 <br />ElectroCom
                        </div>
                        <div className="item-title">Desarrollador de software (Python)</div>
                    </li>

                </ul>

            </div>

        </Container>








    )
}
