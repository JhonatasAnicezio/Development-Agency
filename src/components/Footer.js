import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { listContact } from '../services';
import TitleH2 from './TitleH2';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div id='contact-area'>
        <div className='container'>
          <div className='row'>
            <TitleH2 title='Entre em contato conosco' />
            { listContact.map((item, index) =>
              <div key={ index } className='col-md-4 contact-box'>
                <i><FontAwesomeIcon icon={ item.icon } /></i>
                { item.contact.map((contact, index) =>
                  <p key={ index }>
                    <span className='contact-title'>{ contact.title }</span>
                    { contact.cont }
                  </p>
                ) }
              </div>
            ) }
            <div className='col-md-6' id='msg-box'>
              <p>Ou nos deixe uma mensagem:</p>
            </div>
            <div className='col-md-6' id='contact-form'>
              <form action=''>
                <input type='email' className='form-control' placeholder='E-mail' name='email' />
                <input type='text' className='form-control' placeholder='Assunto' name='subject' />
                <textarea className='form-control' rows='3' placeholder='Sua mensagem...' name='message'/>
                <input type='submit' className='main-btn' value='Enviar' />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id='copy-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p>Desenvolvido por <a href='https://www.linkedin.com/in/jhonatas-anicezio/' target='blank'>hDC Agency</a> &copy; 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;