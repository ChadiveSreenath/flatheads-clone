import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const AccordionItem = () => {


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <>
            <div className="products-filters">
                <Accordion sx={{ marginTop: "15px", border: "none", boxShadow: "none" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                    >
                        <Typography sx={{ width: '33%' }}>
                            <p className="accordion-text">Size</p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="accordion-inner-container">
                                <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                    <input type="checkbox" />
                                    <p>S</p>
                                </span>
                                <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                    <input type="checkbox" />
                                    <p>M</p>
                                </span>
                                <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                    <input type="checkbox" />
                                    <p>L</p>
                                </span>
                                <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                    <input type="checkbox" />
                                    <p>XL</p>
                                </span>
                                <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                    <input type="checkbox" />
                                    <p>XXl</p>
                                </span>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "15px", border: "none", boxShadow: "none" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <p className="accordion-text">Price</p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <p>From</p>
                                    <span style={{ marginLeft: "5rem" }}>To</span>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <input type="text" style={{ width: "6rem", padding: "0.75rem" }} />
                                    <input type="text" style={{ width: "6rem", padding: "0.75rem", marginLeft: "5rem" }} />
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "15px", border: "none", boxShadow: "none" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <p className="accordion-text">Gender</p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <label style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                <input type="checkbox" />
                                <p>Male</p>
                            </label>
                            <label style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                <input type="checkbox" />
                                <p>Female</p>
                            </label>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: "15px", border: "none", boxShadow: "none" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <p className="accordion-text">Availability</p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                <input type="checkbox" />
                                <p>In stock</p>
                            </span>
                            <span style={{ fontSize: "0.85rem", display: "flex", margin: "0", gap: "5px" }}>
                                <input type="checkbox" />
                                <p>Out of stock</p>
                            </span>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default AccordionItem
