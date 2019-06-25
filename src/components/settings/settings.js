import React from 'react';

import { Link } from 'gatsby';

import { connect } from 'react-redux';

import { changeReaderBG, changeReaderColor, changeReaderFont, changeLineHeight } from '../../state/actions';

import styles from './settings.module.scss';

const mapStateToProps = state => {
    return {
        readerFont: state.readerFont,
        readerColor: state.readerColor,
        readerBgColor: state.readerBgColor,
        readerLineHeight: state.readerLineHeight
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeReaderBG: readerBgColor => dispatch(changeReaderBG(readerBgColor)),
        changeReaderColor: readerColor => dispatch(changeReaderColor(readerColor)),
        changeReaderFont: readerFont => dispatch(changeReaderFont(readerFont)),
        changeLineHeight: lineHeight => dispatch(changeLineHeight(lineHeight))
    };
};

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.settings}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputItem}>
                        <label>Font Family</label>
                        <select style={{ fontFamily: this.props.readerFont }} value={this.props.readerFont} name="font-family" onChange={(e) => { this.props.changeReaderFont(e.target.value) }}>
                            {
                                ['Arial', 'Open Dyslexic', 'Comic Sans MS', 'Roboto', 'Times New Roman'].map((val, i) =>
                                    <option key={val} value={val} style={{ fontFamily: val }}>{val}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Line Height</label>
                        <div className={styles.row}>
                            <input type="range" min="1" max="20" className="slider" value={Number(this.props.readerLineHeight * 10)} onChange={
                                (e) => {
                                    this.props.changeLineHeight(e.target.value * 1 / 10);
                                    console.log(this.props.readerLineHeight);
                                }
                            } />
                            <p>{this.props.readerLineHeight}</p></div>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Character Spacing</label>
                        <input type="range" min="1" max="100" className="slider" />
                    </div>
                    <div className={styles.inputItem}>
                        <label>Font Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div key={'color' + val} className={`${styles.tile} ${(this.props.readerColor == val) ? styles.selected : ''}`} style={{ backgroundColor: val }} onClick={() => { this.props.changeReaderColor(val) }} />)}
                        </div>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Background Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div key={'bgColor' + val} className={`${styles.tile} ${(this.props.readerBgColor == val) ? styles.selected : ''}`} style={{ backgroundColor: val }} onClick={() => { this.props.changeReaderBG(val) }} />)}
                        </div>
                    </div>

                    <div className={styles.inputItem}>
                        <h2 style={{
                            margin: '30px auto',
                            transition: '.25s linear',
                            backgroundColor: this.props.readerBgColor,
                            color: this.props.readerColor, fontFamily: this.props.readerFont,
                            lineHeight: this.props.readerLineHeight
                        }}>Line 1: Hello World!
                        <br />
                            Line 2: Hello Again!
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);