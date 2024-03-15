"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Megamenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "TeleHealth Consultation",
        slug: "telehealth-consultation-top-booked",
        description:
          "Connect with healthcare professionals through secure online TeleHealth consultations. Access quality medical advice from the comfort of your home.",
      },
      {
        title: "Video Prescription Services",
        slug: "video-prescription-top-booked",
        description:
          "Get personalized video prescriptions from certified doctors, offering convenient and efficient healthcare solutions tailored to your needs.",
      },
      {
        title: "In-Person Doctor Visits",
        slug: "in-person-doctor-visit-top-booked",
        description:
          "Schedule in-person appointments with experienced doctors for comprehensive medical examinations and personalized treatment plans.",
      },
      {
        title: "UIT Consultation",
        slug: "uit-consult-top-booked",
        description:
          "Specialized consultations for UIT (User Interface Testing) to ensure the seamless functionality and user-friendliness of your applications.",
      },
    ],
  },
  {
    title: "Doctors",
    services: [
      {
        title: "E-Medical Guidance Hub",
        slug: "e-medical-guidance-doctors",
        description:
          "Embark on a journey through the E-Medical Guidance Hub, connecting with diverse and skilled healthcare providers. Receive expert medical advice and care conveniently from the comfort of your home.",
      },
      {
        title: "Personalized Health Video Scripts",
        slug: "personalized-health-video-scripts",
        description:
          "Access personalized health video scripts crafted by seasoned healthcare providers. Ensure tailored and effective healthcare solutions catering specifically to your unique needs.",
      },
      {
        title: "In-Person Healing Sessions",
        slug: "in-person-healing-sessions-doctors",
        description:
          "Secure appointments for in-person healing sessions with qualified medical professionals. Experience thorough examinations, precise diagnoses, and personalized treatment plans.",
      },
      {
        title: "User-Centric Design Consultancy",
        slug: "user-centric-design-consultancy-doctors",
        description:
          "Explore User-Centric Design Consultancy with experts in UIT (User Interface Testing). Enhance the user experience of your applications and digital products through insightful consultations.",
      },
    ],
  },
  {
    title: "Specialists",
    services: [
      {
        title: "Virtual Health Specialists",
        slug: "virtual-health-specialists",
        description:
          "Connect with Virtual Health specialists for specialized consultations tailored to your unique health concerns. Receive expert medical advice and personalized treatment plans.",
      },
      {
        title: "Customized Video Prescriptions",
        slug: "customized-video-prescriptions",
        description:
          "Access customized video prescriptions from healthcare professionals specializing in personalized medical recommendations. Benefit from tailored solutions addressing your individual health needs.",
      },
      {
        title: "Specialist In-Person Visits",
        slug: "specialist-in-person-visits",
        description:
          "Schedule in-person visits with healthcare specialists for comprehensive evaluations and targeted treatment plans addressing specific medical conditions. Receive specialized care tailored to your health needs.",
      },
      {
        title: "Digital Interface Optimization Consultancy",
        slug: "digital-interface-optimization-consultancy",
        description:
          "Consult with specialists in UIT (User Interface Testing) to optimize the usability and functionality of your digital interfaces. Enhance user experience through expert insights and recommendations.",
      },
    ],
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "Virtual Symptom Assessment",
        slug: "virtual-symptom-assessment",
        description:
          "Harness the power of Virtual Symptom Assessment through TeleHealth services. Receive timely medical advice and personalized recommendations to address and manage your health challenges.",
      },
      {
        title: "Tailored Video Prescriptions",
        slug: "tailored-video-prescriptions",
        description:
          "Receive tailored video prescriptions designed to specifically address and alleviate your unique health symptoms. Ensure personalized and effective care for your well-being.",
      },
      {
        title: "In-Person Care for Symptomatic Conditions",
        slug: "in-person-care-symptomatic-conditions",
        description:
          "Book in-person visits with healthcare professionals to discuss and address specific health symptoms. Receive comprehensive medical attention and personalized treatment plans for symptomatic conditions.",
      },
      {
        title: "Digital Symptom Optimization Consultancy",
        slug: "digital-symptom-optimization-consultancy",
        description:
          "Consult with experts in UIT (User Interface Testing) to diagnose and optimize digital symptoms in applications and user interfaces. Enhance the overall digital experience through insightful consultations.",
      },
    ],
  },
];

export default function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className="md:space-x-4">
        {Megamenu.map((item, i) => {
          return (
            <NavigationMenuItem className="" key={i}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {item.services.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/services/${component.slug}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
