import React, { Component } from "react";
import SectionHeading from '../../elements/SectionHeading';
import  "./Contact.scss";
import swal from '@sweetalert/with-react';
import classNames from 'classnames';
 
class Contact extends Component {
	constructor() {
        super();
        this.state = {
            Address: "",
            Firstname: "",
            Lastname: "",
            Subject: "",
            Message: "",
            response: "",
            isActiveAddress: false,
            isActiveFirstname: false,
            isActiveLastname: false,
            isActiveSubject: false,
            isActiveMessage: false,

        };
    }

    handleAddressChange = evt => {
        this.setState({ Address: evt.target.value });
    };

    handleFirstnameChange = evt => {
        this.setState({ Firstname: evt.target.value });
    };
    handleLastnameChange = evt => {
        this.setState({ Lastname: evt.target.value });
    };
    handleSubjectChange = evt => {
        this.setState({ Subject: evt.target.value });
    };
    handleMessageChange = evt => {
        this.setState({ Message: evt.target.value });
    };

    handleAddressBlur = evt => {
        this.setState({ isActiveAddress: true });
    };
    handleFirstnameBlur = evt => {
        this.setState({ isActiveFirstname: true });
    };
    handleLastnameBlur = evt => {
        this.setState({ isActiveLastname: true });
    };
    handleSubjectBlur = evt => {
        this.setState({ isActiveSubject: true });
    };
    handleMessageBlur = evt => {
        this.setState({ isActiveMessage: true });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const email = {
            Address: this.state.Address,
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Subject: this.state.Subject,
            Message: this.state.Message
        } 
        fetch("/api/email", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email), // body data type must match "Content-Type" header
        })
        .then(res => {
	        if (res.ok) {
	            return res.json()
	        } else {
        		this.setState({ response: "Przepraszam, Niestety nie udało się wysłać wiadomości!" });
	        }
        }) // parses JSON response into native Javascript objects
        .then(json => {
        	return swal({
				title: `${json.message}`,
				text: "Postaram się odpowiedzieć jak najszybciej",
				icon: "success",
				button: "Ok",
			}) 
        })
        .catch(error => {
            return swal({
			  //title: `${error}`,
			  text: "Przepraszam, Niestety nie udało się wysłać wiadomości!",
			  icon: "error",
			  button: "Ok",
			});   
        });
			this.setState({
	            Address: "",
	            Firstname: "",
	            Lastname: "",
	            Subject: "",
	            Message: "",
	            response: "",
                isActiveAddress: false,
                isActiveFirstname: false,
                isActiveLastname: false,
                isActiveSubject: false,
                isActiveMessage: false,
	        });
        };
    render() {
        let emailClass = classNames({
          contact__form__email: true,
          'col-md-12': true,
          'validate': this.state.isActiveAddress,

        });
        let firstNameClass = classNames({
          contact__form__firstname: true,
          'col-md-12': true,
          'validate': this.state.isActiveFirstname,
        });
        let lastNameClass = classNames({
          contact__form__lastname: true,
          'col-md-12': true,
          'validate': this.state.isActiveLastname,
        });
        let subjectClass = classNames({
          contact__form__subject: true,
          'col-md-12': true,
          'validate': this.state.isActiveSubject,
        });        
        let messageClass = classNames({
          contact__form__message: true,
          'col-md-12': true,
          'validate': this.state.isActiveMessage,
        });

        let emailInfoClass = classNames({
          'visible': this.state.isActiveAddress,

        });
        let firstNameInfoClass = classNames({
          'visible': this.state.isActiveAddress,
        });
        let lastNameInfoClass = classNames({
          'visible': this.state.isActiveAddress,
        });
        let subjectInfoClass = classNames({
          'visible': this.state.isActiveAddress,
        });        
        let messageInfoClass = classNames({
          'visible': this.state.isActiveAddress,
        });

    	return (
    	  <section className="Contact container">
      		<SectionHeading title={'Kontakt'}/>
				<form className="contact__form row" onSubmit={this.handleSubmit}>
                    <label htmlFor="address">Email
					   <input type="email" required className={emailClass} id="address" value={this.state.Address}  onChange={this.handleAddressChange} onBlur={this.handleAddressBlur}/>
                        <span className={emailInfoClass}>Musisz podać poprawny adres email</span>
                    </label>
                    <label htmlFor="firstname" id="firstnameLabel">Imię
					<input type="text" required className={firstNameClass} id="firstname" value={this.state.Firstname} onChange={this.handleFirstnameChange} onBlur={this.handleFirstnameBlur}/>
                        <span className={firstNameInfoClass}>Musisz podać imię</span>
                    </label>
                    <label htmlFor="lastname" id="lastnameLabel">Nazwisko
					<input type="text" required className={lastNameClass} id="lastname" value={this.state.Lastname} onChange={this.handleLastnameChange} onBlur={this.handleLastnameBlur}/>
                        <span className={lastNameInfoClass}>Musisz podać nazwisko</span>
                    </label>
                    <label htmlFor="subject">Temat wiadomości
					<input type="text" required className={subjectClass} id="subject" value={this.state.Subject}  onChange={this.handleSubjectChange} onBlur={this.handleSubjectBlur}/>
                        <span className={subjectInfoClass}>Musisz podać temat wiadomości</span>
                    </label>
                    <label htmlFor="message">Treść wiadomości
					<textarea name="message" required className={messageClass} id="message" rows="10" cols="30" value={this.state.Message} onChange={this.handleMessageChange} onBlur={this.handleMessageBlur}>					
                    </textarea>	
					   <span className={messageInfoClass}>Treść wiadomości nie może być pusta</span>
                    </label>
					<input type="submit" className="contact__form__submit" value="Wyślij"/>			
				</form>		
    	  </section>
    	);
  	}
}
 
export default Contact;