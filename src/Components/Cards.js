import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <section>
            <div className="container-card">
                <Link to="/General">
                    <div className="card">
                        <div className="content">
                            <div className="img8x">
                                <img
                                    src="https://img.freepik.com/premium-vector/debt-collector-concept-illustration_277904-9642.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="content8x">
                                <h3>
                                    General
                                    <br />
                                    <span>Traffic Ticket, Car Accidents, Debt Collection</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/Family">
                    <div className="card">
                        <div className="content">
                            <div className="img8x">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/002/292/974/original/happy-family-with-son-and-daughter-parents-hugging-children-illustration-vector.jpg?pid=ImgDet&amp;rs=1"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="content8x">
                                <h3>
                                    Family
                                    <br />
                                    <span>Divorce, Alimony, Adoption, Support</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/Work">
                    <div className="card">
                        <div className="content">
                            <div className="img8x">
                                <img
                                    src="https://images-platform.99static.com//NXTksYopC8l_4lF0kfsj5bMKgUE=/295x0:1140x845/fit-in/500x500/projects-files/140/14018/1401825/93653c2d-6df9-49f7-97e4-5561e2b5903c.png"
                                    alt="..."
                                />
                            </div>
                            <div className="content8x">
                                <h3>
                                    Work
                                    <br />
                                    <span>Rights, Termination, Harassment, Wages, Complaints</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="container-card">
                <Link to="/Business">
                    <div className="card">
                        <div className="content">
                            <div className="img8x">
                                <img
                                    src="https://img.freepik.com/free-vector/flat-design-female-team-leader_52683-54980.jpg?w=360"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="content8x">
                                <h3>
                                    Business
                                    <br />
                                    <span>Topic1, Topic2, Topic3, YOU NEED @ MORE TOPICS</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/Tax">
                    <div className="card">
                        <div className="content">
                            <div className="img8x">
                                <img
                                    src="https://img.freepik.com/premium-vector/tax-form-state-government-taxation-with-forms-calendar-audit-calculator-analysis-accounting-payment-flat-background-illustration_2175-3806.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="content8x">
                                <h3>
                                    Tax
                                    <br />
                                    <span>Topic1, Topic2, Topic3, MORE TOPICS</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
}

export default Cards;