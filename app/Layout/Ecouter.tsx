'use client';
import { playlistData } from '@/data/playlist-data';
import Image from 'next/image';
import Button from '../Components/Button';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ecouter = () => {
  return (
    <section id="ecouter" className="text-foreground font-mono flex flex-col gap-4 mb-60">
      <h1>Ecouter</h1>

      <VerticalTimeline lineColor="#171717" className="pe-0">
        <VerticalTimelineElement
          date="Formation des bataillons de marche"
          className="h-30"
          iconStyle={{
            background: 'rgb(23, 23, 23)',
            color: '#fff',
            boxShadow:
              '0 0 0 4px #fef3c6,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
          }}
        />
        {playlistData.map((element, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work p-0"
              contentStyle={{
                background: 'rgba(212, 189, 151)',
              }}
              contentArrowStyle={{
                borderRight: '10px solid  rgba(23, 23, 23, 0.8)',
              }}
              iconClassName="bg-amber-100"
              date={element.date}
              dateClassName="text-[23px]"
              iconStyle={{
                boxShadow:
                  '0 0 0 4px #171717,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
              }}
              icon={<FontAwesomeIcon icon={element.icon} size="xl" color="#171717" />}
            >
              <div className="h-[300px]">
                <Image
                  src={element.src}
                  alt={element.alt}
                  width={500}
                  height={500}
                  className="rounded-lg mb-4 object-cover shadow-lg shadow-black"
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
              <p className="italic text-sm text-justify ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis necessitatibus
                debitis ipsa.
              </p>
              <div className="mt-4">
                <Button title="Ecouter" icon={faPlay} dark />
              </div>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          date="Fin de la campagne de France"
          iconStyle={{
            background: 'rgb(23, 23, 23)',
            color: '#fff',
            boxShadow:
              '0 0 0 4px #fef3c6,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
          }}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Ecouter;
