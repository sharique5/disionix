const PrivacyContentSection = () => {
    return (
        <section className="blog-details py-120 rpy-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="privacy-details-content">
                            <p><strong>Effective Date:</strong> 10 Oct 2024</p>

                            <h2>Introduction</h2>
                            <p>
                                Welcome to <strong>MosqueSeek</strong>. Your privacy is important to us, and we are committed to protecting
                                your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when
                                you use our mobile application <strong>MosqueSeek</strong> ("the App"). Please take a moment to familiarize
                                yourself with our privacy practices.
                            </p>
                            <p>By using the App, you agree to the collection and use of information in accordance with this policy.</p>

                            <h2>Information We Collect</h2>
                            <h3>1. Location Data</h3>
                            <p>
                                When you use our App, we may collect and process information about your actual location. This location data is
                                used exclusively to provide services based on your current location, such as showing mosques near you. We
                                use <strong>GPS</strong>, <strong>Wi-Fi</strong>, or other network-based methods to determine your location
                                with your permission.
                            </p>

                            <h3>2. Device Information</h3>
                            <p>
                                We may collect information about the device you use to access our App, including details such as the type of
                                device, the operating system, unique device identifiers, and mobile network information. This data helps us
                                optimize the App for various devices and platforms.
                            </p>

                            {/* <h3>3. Log Data</h3>
            <p>
                In the event of an error in the App, we collect data and information (through third-party products) on your 
                device, known as Log Data. This Log Data may include information such as your device's 
                Internet Protocol (“IP”) address, device name, operating system version, the configuration of the App when 
                utilizing our service, the time and date of your use of the service, and other statistics.
            </p> */}

                            <h3>3. App Permissions</h3>
                            <p>When you use <strong>MosqueSeek</strong>, we request access to the following permissions:</p>
                            <ul>
                                <li><strong>Location:</strong> To display mosques nearby and provide directions.</li>
                                <li><strong>Internet Access:</strong> For loading map data and retrieving mosque details.</li>
                            </ul>

                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect in the following ways:</p>
                            <ul>
                                <li>
                                    <strong>Location Services:</strong> To display nearby mosques and directions based on your current location.
                                </li>
                                <li>
                                    <strong>User Experience:</strong> To improve our App's performance, understand user behavior, and enhance
                                    the user experience.
                                </li>
                                <li>
                                    <strong>Customer Support:</strong> To address any issues or support requests you may have when using the
                                    App.
                                </li>
                            </ul>
                            <p>
                                Your information will only be used for the purposes outlined in this policy and will not be shared with third
                                parties for marketing purposes.
                            </p>

                            <h2>Third-Party Access to Information</h2>
                            <p>
                                <strong>MosqueSeek</strong> integrates with <strong>Google Maps API</strong> to provide location-based
                                services. This means that your location data may be shared with Google Maps to display nearby mosques or
                                give directions. Google Maps’ privacy policy applies when you interact with its services through our App.
                            </p>
                            <p>
                                You can view Google’s privacy policy here: <a href="https://policies.google.com/privacy" target="_blank">
                                    Google Maps Privacy Policy</a>.
                            </p>
                            <p>We do not sell or share your personal data with any other third parties.</p>

                            <h2>User Consent</h2>
                            <p>
                                Before collecting your location data, we will request your explicit permission. You can withdraw consent
                                at any time by disabling location services through your device settings.
                            </p>

                            <p>To do so:</p>
                            <ul>
                                <li><strong>Android:</strong> Go to <em>{"Settings > Apps > MosqueSeek > Permissions"}</em> and revoke the location permission.</li>
                                <li><strong>iOS:</strong> Go to <em>{"Settings > Privacy > Location Services"}</em>, and disable location services for <strong>MosqueSeek</strong>.</li>
                            </ul>
                            <p>
                                Without location access, certain features of the App (e.g., showing nearby mosques) may not
                                function properly.
                            </p>

                            <h2>Data Retention and Security</h2>
                            <p>
                                We do not store your location or any other personal data on our servers. The data used for mosque searches
                                and directions is processed in real time and is discarded when you close the App.
                            </p>
                            <p>
                                We implement appropriate security measures to protect your information from unauthorized access or
                                disclosure. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>

                            <h2>Children’s Privacy</h2>
                            <p>
                                <strong>MosqueSeek</strong> is not intended for children under the age of 13. We do not knowingly collect
                                personal data from children. If you are a parent or guardian and you believe your child has provided us
                                with personal information, please contact us at <a href="mailto:contact@disionix.com">contact@disionix.com</a>
                                &nbsp; so we can take appropriate steps to remove that information from our systems.</p>

                            <h2>Changes to the Privacy Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. Any changes will be posted here, along with the
                                effective date at the top of the policy. We encourage you to review this Privacy Policy periodically
                                to stay informed about how we are protecting your data.
                            </p>
                            <p>By continuing to use the App after any changes, you acknowledge and agree to the updated policy.</p>

                            <h2>Contact Us</h2>
                            <p>If you have any questions or concerns about this Privacy Policy or your personal data, feel free to contact us at:</p>
                            <p><strong>Email:</strong> contact@disionix.com</p>

                            <h2>Compliance with Laws</h2>
                            <p>
                                We comply with all applicable privacy laws, including the
                                <strong>General Data Protection Regulation (GDPR)</strong> if you are located in the European Union,
                                and <strong>India's Information Technology Act</strong> (or any other relevant local regulations).
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PrivacyContentSection;