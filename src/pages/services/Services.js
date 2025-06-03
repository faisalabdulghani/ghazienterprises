// src/pages/Services.js
import React, { useEffect, useRef } from 'react';
import './style.css';
import ServiceCard from '../../components/card/servicescard/ServicesCard';
import contructionImage from '../../assets/ContructionWork.jpg'
import asphaltImage from '../../assets/AsphaltWork.png'
import contractingImage from '../../assets/Contracting.jpg'
import materialSupplyImage from '../../assets/contructionmaterialsupply.jpg'
import earthworkImage from '../../assets/EarthWork.jpeg'
import electricalImage from '../../assets/ElectricalInstallation.jpg'
import heavyEquipmentImage from '../../assets/HeavyEquipment.png'
import logisticsImage from '../../assets/Logistics.png'
import rentalImage from '../../assets/RentalHeavyMachines.jpg'

const Services = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all service cards
        cardRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    const services = [
        {
            image: contructionImage,
            title: 'Construction',
            description: 'We offer comprehensive construction services, managing projects from inception to completion with a focus on quality and efficiency. ',
            link: '/services/construction',
        },
        {
            image: contractingImage,
            title: 'Contracting',
            description: 'Our contracting services encompass a wide range of projects, including residential, commercial, and industrial developments.',
            link: '/services/construction',
        },
        {
            image: rentalImage,
            title: 'Rental of Heavy Machines',
            description: 'We provide rental services for heavy equipment machines, ensuring our clients have access to the necessary tools for their projects.',
            link: '/services/construction',
        },
        {
            image: earthworkImage,
            title: 'Earth Works',
            description: 'GEC excels in earthworks, providing excavation, grading, and site preparation services for various construction projects.',
            link: '/services/construction',
        },
        {
            image: asphaltImage,
            title: 'Asphalt Work',
            description: 'Our asphalt work services include road construction and maintenance, utilizing the latest techniques and materials for durable results.',
            link: '/services/construction',
        },
        {
            image: materialSupplyImage,
            title: 'Materials Supply',
            description: 'Our materials supply services ensure our clients have access to high-quality construction materials for their projects.',
            link: '/services/construction',
        },
        {
            image: electricalImage,
            title: 'Electrical Power Installation',
            description: 'We specialize in electrical power installations, providing reliable and sustainable solutions for our clients.',
            link: '/services/construction',
        },
        {
            image: heavyEquipmentImage,
            title: 'Heavy Equipment Operations',
            description: 'We offer heavy equipment operations, including earthworks and site preparation, with a focus on safety and precision.',
            link: '/services/construction',
        },
        {
            image: logisticsImage,
            title: 'Logistics',
            description: 'Our logistics services include transportation and supply chain management, ensuring timely delivery and efficient distribution of materials.',
            link: '/services/construction',
        },

    ];

    return (
        <div className="services-page">
            <div className="services-header">
                <h1 className="services-heading">Our Services</h1>
                <p className="services-description">
                    Driven by innovation and strategic foresight, GEC actively engages in a range of industries. Each business sector plays a vital role in reinforcing our market presence and delivering high-value solutions to our clients across the GCC region and beyond.
                    With a forward-thinking approach and deep industry expertise.
                </p>
            </div>
            <div className="services-grid">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        ref={(el) => cardRefs.current[idx] = el}
                        className="service-card-wrapper"
                    >
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;