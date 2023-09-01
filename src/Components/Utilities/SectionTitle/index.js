const SectionTitle = ({ label, title, extraClass }) => {
    return (

        <div className={`section-title ${extraClass ? extraClass : ''}`}>
            <span>{label}</span>
            <h2>{title}</h2>
        </div>

    );
}

export default SectionTitle;