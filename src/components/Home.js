import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import "./Home.css";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    };

    componentDidMount() {
        db.onceGetUsers().then(snapshot =>
            this.setState({ users: snapshot.val() })
        );
    }

    render() {

        const { users } = this.state;

        return (
            <div className="OrderBody">
            { !!users && <UserList users={users} /> }
                <h2>Place Order</h2>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form data-coffee-order="form">
                                <div className="form-group1">
                                    <input className="form-control" name="coffee" id="coffeeOrder" placeholder="Name" autoFocus="true"/>
                                </div>
                                <div className="form-group">
                                    <label class="radio-inline"><input type="radio" name="optradio" checked/>Small</label>
                                    <label class="radio-inline"><input type="radio" name="optradio"/>Medium</label>
                                    <label class="radio-inline"><input type="radio" name="optradio"/>Large</label>
                                </div>

                                <div className="slidecontainer">
                                    <label for="slider">Caffeine Rating </label>
                                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                                </div>

                                <div className="form-group6">
                                    <label for="flavorShot">Flavor Shot:     </label>
                                    <select id="flavorShot" class="form-control" name="flavor">
                                        <option value="">None</option>
                                        <option value="caramel">Caramel</option>
                                        <option value="almond">Almond</option>
                                        <option value="mocha">Mocha</option>
                                    </select>
                                </div>

                                <div class="form-group3">
                                    <input className="form-control" type="address" name="Address" id="addressInput" value="" placeholder="Delivery Adress Line 1"/>
                                </div>
                            
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="city" placeholder="City"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control" id="state" placeholder="State"/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input type="text" className="form-control" id="zip" placeholder="Zip"/>
                                    </div>
                                </div>
                            </form>

                            <div className="form-row2">
                                <label for="arrivalDay">Arrival Day:  </label>
                                <select id="arrivalDay" class="form-control" name="Arrival Day">
                                    <option value="currentDay">CurrentDay</option>
                                    <option value="almond">Next Day</option>
                                </select>
                                <label for="arrivalTime">     Arrival Hour(Not Military)  </label>
                                <select id="arrivalTime" class="form-control" name="Arrival Hour">
                                    <option value="12">12</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                </select>
                                <label for="arrivalMinute">     Arrival Minute: </label>
                                <select id="arrivalMinute" class="form-control" name="Arrival Minute">
                                    <option value="00">:00</option>
                                    <option value="01">:01</option>
                                    <option value="03">:03</option>
                                    <option value="04">:04</option>
                                    <option value="05">:05</option>
                                    <option value="06">:06</option>
                                    <option value="07">:07</option>
                                    <option value="08">:08</option>
                                    <option value="09">:09</option>
                                    <option value="10">:10</option>
                                    <option value="11">:11</option>
                                    <option value="12">:12</option>
                                    <option value="13">:13</option>
                                    <option value="14">:14</option>
                                    <option value="15">:15</option>
                                    <option value="16">:16</option>
                                    <option value="17">:17</option>
                                    <option value="18">:18</option>
                                    <option value="19">:19</option>
                                    <option value="20">:20</option>
                                    <option value="21">:21</option>
                                    <option value="22">:22</option>
                                    <option value="23">:23</option>
                                    <option value="24">:24</option>
                                    <option value="25">:25</option>
                                    <option value="26">:26</option>
                                    <option value="27">:27</option>
                                    <option value="28">:28</option>
                                    <option value="29">:29</option>
                                    <option value="30">:30</option>
                                    <option value="31">:31</option>
                                    <option value="32">:32</option>
                                    <option value="33">:33</option>
                                    <option value="34">:34</option>
                                    <option value="35">:35</option>
                                    <option value="36">:36</option>
                                    <option value="37">:37</option>
                                    <option value="38">:38</option>
                                    <option value="39">:39</option>
                                    <option value="40">:40</option>
                                    <option value="41">:41</option>
                                    <option value="42">:42</option>
                                    <option value="43">:43</option>
                                    <option value="44">:44</option>
                                    <option value="45">:45</option>
                                    <option value="46">:46</option>
                                    <option value="47">:47</option>
                                    <option value="48">:48</option>
                                    <option value="49">:49</option>
                                    <option value="50">:50</option>
                                    <option value="51">:51</option>
                                    <option value="52">:52</option>
                                    <option value="53">:53</option>
                                    <option value="54">:54</option>
                                    <option value="55">:55</option>
                                    <option value="56">:56</option>
                                    <option value="57">:57</option>
                                    <option value="58">:58</option>
                                    <option value="59">:59</option>
                                </select>
                                <label for="am/pm">    AM/PM: </label>
                                <select id="am/pm" class="form-control" name="AM/PM">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>

                            <div className="orderButton">
                            </div>
                                <button type="button" class="btn btn-light">Reset</button>
                            </form>
                        </div>
                    </div>

                <div id="order list">
                </div>
            <div className="orderButton">
            </div>

            

            </div>


                
        );
    }
}

const UserList = ({ users }) =>
    <div>
        <h2>List of Usernames of Users</h2>
        <p>(Saved on Sign Up in Firebase Database)</p>

        {Object.keys(users).map(key =>
            <div key={key}>{users[key].username}</div>
        )}
    </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);