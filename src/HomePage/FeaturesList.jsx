import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';

const ListItem = ({ text, link, linkText }) => (
    <li className="flex items-center">
        <div className="flex-shrink-0">
            <CheckIcon aria-hidden="true" className="h-6 w-6 text-green-500" />
        </div>
        <p className="ml-3 text-[20px] font-bold leading-[45px] text-left text-brand-gray">
            {link ? (
                <>
                    {text}{' '}
                    <Link to={link}>
                        <span className="underline hover:text-gray-600">{linkText}</span>
                    </Link>
                </>
            ) : (
                text
            )}
        </p>
    </li>
);

const FeaturesList = () => (
    <div className="flex justify-center py-2">
        <ul role="list" className="space-y-4">
            <ListItem text="All features unlocked" />
            <ListItem text="Create your own streams" />
            <ListItem text="Unlimited AI tags" />
            <ListItem text="Unlimited time on the app" />
            <ListItem text="Advanced privacy" />
            <ListItem text="Priority access to new features" />
            <ListItem text="Vote on our" link="#roadmap" linkText="Roadmap" />
        </ul>
    </div>
);

export default FeaturesList;
